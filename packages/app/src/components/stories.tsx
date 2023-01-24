import React from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  OnConnect,
} from "reactflow";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];

const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export function TestReactFlow() {
  const [nodes, _setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect: OnConnect = React.useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="flex justify-center">
      <div className="w-2xl h-2xl p-4 border">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
}

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
