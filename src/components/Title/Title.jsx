import "./title.css";
function Title({ subtitle, mainTitle }) {
  return (
    <div className="title">
      <p className="title__subtitle">{subtitle}</p>
      <h3 className="title__main-title">{mainTitle}</h3>
    </div>
  );
}
export default Title;
