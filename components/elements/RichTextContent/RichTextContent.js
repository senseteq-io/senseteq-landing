import { Delimiter } from './components'
import dynamic from 'next/dynamic'

const OutputWithoutSSR = dynamic(() => import('editorjs-react-renderer'), {
  ssr: false
})

const renderers = {
  delimiter: Delimiter
}

const RichTextContent = (props) => {
  return <OutputWithoutSSR renderers={renderers} {...props} />
}

export default RichTextContent
