import ContentEditable from "../../node_modules/react-contenteditable";

const ImageInput = ({ data }) => (
  <div className="block">
    <div className="input">
      <ContentEditable
        html={data}
        tagName='div' />
      <div className="image-container">
        <img src={data} alt="" className="image" />
      </div>
    </div>
    <style jsx>{`
      .block {
        margin-bottom: 15px;
      }
      .input {
        display: flex;
        flex-direction: column;
        padding: 10px 15px;
        border: 1px solid #DDD;
        border-radius: 4px;
        font-size: 14px;
        word-break: break-word;
      }
      .image-container {
        margin-top: 15px;
        display: flex;
        justify-content: flex-start;
      }
      .image {
        max-width: 100%;
        max-height: 300px;
      }
    `}</style>
  </div>
);

export default ImageInput