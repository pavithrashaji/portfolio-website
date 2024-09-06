import { NextResponse } from "next/server";

const fetchReadmeContent = async (repoName: string): Promise<string> => {
    try {
      const response = await fetch(`https://api.github.com/repos/pavithrashaji/${repoName}/readme`,
      {
        headers: {
          'Authorization': `token ${process.env.GITHUB_TOKEN}`,
        },
      }
      );
      const data = await response.json();
      if (data.message === 'Not Found') return 'Project';
      const readmeContent = atob(data.content); 
      return readmeContent.split('\n')[0]; 
    } catch (error) {
      console.error('Failed to fetch README:', error);
      return 'No README available';
    }
  };

export async function GET() {
  const res = await fetch(
    "https://api.github.com/users/pavithrashaji/repos?sort=created&direction=desc"
  );
  const repos = await res.json();

  const reposWithReadme = await Promise.all(
    repos.map(async (repo: any) => {
      const readmeContent = await fetchReadmeContent(repo.name);
      return {
        images: [], 
        name: repo.name,
        description: repo.description || '',
        readmeContent,
      };
    })
  );

  return NextResponse.json(reposWithReadme);
}

