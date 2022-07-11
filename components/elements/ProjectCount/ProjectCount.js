import { Text, Title } from '../../elements'

/**
 * @returns Component with uptitle and count of project as title
 */
const ProjectCount = (props) => {
  const { uptitle, title } = props

  return (
    <div className="project-count-wrapper" data-aos="zoom-out">
      <Text caption className="uptitle">
        {uptitle}
      </Text>
      <Title as="h4" className="title">
        {title}
      </Title>
    </div>
  )
}
export default ProjectCount
