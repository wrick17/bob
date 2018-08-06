import Text from "../../segments/admin/text";
import ImageInput from "../../segments/admin/image";

const map = {
  text: Text,
  link: ImageInput,
}

const getComponent = (faring) => {
  const block = {...faring};
  delete block.type;
  delete block.id;
  const items = Object.keys(block);
  return (
    <div key={faring.id}>
      {
        items.map(item => {
          const ComposedComponent = map[item];
          return <ComposedComponent key={faring.id} data={block[item]} />
        })
      }
    </div>
  )
}

const Content = ({ content }) => {
  return content.fields.map(block => getComponent(block))
}

export default Content;
