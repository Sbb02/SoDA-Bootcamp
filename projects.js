const GITHUB_USERNAME= "Sbb02"
fetch('https;//api.github.com/users/${GITHUB_USERNAME}/repos')
.then(response => response.json())
.then(repos => {
	for(const repo of repos){
	const repoName = repo.name
	const repoDescription = repo.description
	const repoURL = repo.html_urlconst repoLanguage = repo.language

	const cardContainer = document.createElement('div')
	cardContainer.className = "card center"

	const cardImage = document.createElement('img')
	cardImage.src="./assets/generic_code_bgrnd.jpg"
	cardImage.className = "project-image"

	cardContainer.appendChild()
	const projectInforContainer = document.createElement('div')
	projectInfoContainer.classNamwe = "project-info-container"

	const projectTitle = document.createElement('h3')
	projectTitle.textContent = repoDescription

	const projectDescription = document.createElement('p')
	projectDescription.textContent = repoDescription

	const projectURL = document.createElement('a')
	projectURL.href = repoURL
	projectURL.target = "_blank"
	projectURL.appendChild(projectTitle)
	const projectLanguage = document.createElement('p')
	projectLanguage.textContent = repoLanguage

	projectInfoContainer.appendChild(projectURL)
	projectInfoContainer.appendChild(projectDescription)
	projectInfoContainer.appendChild(projectLanguage)

	cardContainer.appendChild(projectInfoContainer)

	const projectsContainer = document.getElementById('projects_container')

	projectsContainer.appendChild(cardContainer)
	}
})

{
	name: 'Sohum'
	stars: 5,
	parents: {}
}