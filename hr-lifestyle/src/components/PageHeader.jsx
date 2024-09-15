export default function PageHeader(props) {
  return (
    <div className={`page-header ${props.className}`}>
      <h1>{props.title}</h1>
      {props.breadcrumbs}
    </div>
  );
}
