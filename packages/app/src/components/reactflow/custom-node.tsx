import { Handle, useReactFlow, useStoreApi, Position } from "reactflow";

export function CustomNode({ id, data }: { id: string; data: any }) {
  return (
    <>
      <div className="custom-node__header">
        This is a <strong>custom node</strong>
      </div>
      <div className="custom-node__body">
        {Object.keys(data.selects).map((handleId) => (
          <Select
            key={handleId}
            nodeId={id}
            value={data.selects[handleId]}
            handleId={handleId}
          />
        ))}
      </div>
    </>
  );
}
const EDGE_OPTIONS = [
  {
    value: "smoothstep",
    label: "Smoothstep",
  },
  {
    value: "step",
    label: "Step",
  },
  {
    value: "default",
    label: "Bezier (default)",
  },
  {
    value: "straight",
    label: "Straight",
  },
];

function Select({ value, handleId, nodeId }: any) {
  const { setNodes } = useReactFlow();
  const store = useStoreApi();

  const onChange = (evt: any) => {
    const { nodeInternals } = store.getState();
    setNodes(
      Array.from(nodeInternals.values()).map((node) => {
        if (node.id === nodeId) {
          node.data = {
            ...node.data,
            selects: {
              ...node.data.selects,
              [handleId]: evt.target.value,
            },
          };
        }

        return node;
      })
    );
  };

  return (
    <div className="custom-node__select">
      <div>Edge Type</div>
      <select className="nodrag" onChange={onChange} value={value}>
        {EDGE_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <Handle type="source" position={Position.Right} id={handleId} />
    </div>
  );
}