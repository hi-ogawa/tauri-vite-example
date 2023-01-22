export function TestButton() {
  return (
    <div className="flex justify-center">
      <div className="w-2xl flex flex-col gap-3 p-3 border">
        <h2 className="text-lg">Button</h2>
        <button className="antd-btn antd-btn-primary p-1 px-2">Primary</button>
        <button className="antd-btn antd-btn-default p-1 px-2">Default</button>
      </div>
    </div>
  );
}

export function TestHello() {
  return <div>hello</div>;
}
