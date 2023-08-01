const Box = (props) => {
  //  Write your code here.
  const { classes, message } = props;
  const containerClassName = `box ${classes}`;
  return <div className={containerClassName}>{message}</div>;
};

const element = (
  //  Write your code here.
  <div className="main-container">
    <h1 className="heading">Boxes</h1>
    <div className="box-container">
      <Box message="small" classes="small" />
      <Box message="medium" classes="medium" />
      <Box message="large" classes="large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
