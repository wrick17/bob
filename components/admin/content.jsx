import Text from "../../segments/admin/text";
import Bulky from "../../segments/admin/bulky";
import ImageInput from "../../segments/admin/image";

const map = {
  text: Text,
  link: ImageInput,
  content: Bulky,
}

const getComponent = (faring, onChange) => {
  const { type, id, order,...block} = faring;
  const items = Object.keys(block);
  return (
    <div key={faring.id}>
      {
        items.map(item => {
          const ComposedComponent = map[item];
          return <ComposedComponent key={faring.id} data={block[item]} onChange={e => onChange({ id, value: e.target.value, item })} />
        })
      }
    </div>
  )
}

const Content = ({ fields, onChange }) => {
  const fieldIds = Object.keys(fields);
  return fieldIds.map(fieldId => getComponent(fields[fieldId], onChange))
}

export default Content;
