import Child from "./Child";

function Parent() {
  return (
    <Child color="red" onClick={() => console.log("Test")}>
      "Hello World!"
    </Child>
  );
}

export default Parent;
