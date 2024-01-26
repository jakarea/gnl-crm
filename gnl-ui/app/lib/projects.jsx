export const Projects = async function getAllProject() {
    const response = await fetch(process.env.NEXT_BACKEND_URL +'/api/project', 
        {
            cache: 'no-cache'
        }
    );

    return response.json();
}


export const GetSingleProject = async function singleProject(projectId) {
    const response = await fetch(process.env.NEXT_BACKEND_URL + '/api/project/' + projectId, {
        cache: 'no-cache'
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch project details. Status: ${response.status}`);
    }

    return response.json();
  
};


export const SearchProjects = async function getAllSearchProjects(query) {
    const response = await fetch(`${process.env.NEXT_BACKEND_URL}/api/task/project/search?query=${query}`, {
        cache: 'no-cache',
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch search results. Status: ${response.status}`);
    }

    return response.json();
}
