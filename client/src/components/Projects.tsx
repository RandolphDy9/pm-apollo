import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../queries/projectQueries';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <p>loading...</p>
  if (error) return <p>Something went wrong!</p>

  return (
    <div className="row gap-4 my-4 mx-1">
      { data.projects.length > 0 && (
        data.projects.map((project: any) => {
          return <ProjectCard key={project.id} project={project} />
        })
      )}
    </div>
  )
}

export default Projects;