import { Handle, useReactFlow, useStoreApi, Position } from "reactflow";
import type { NodeDataSelect } from "./initial-elements";

export function CustomNode({ id, data }: { id: string; data: NodeDataSelect }) {
  return (
    <>
      <div className="custom-node__header">
        This is a <strong>custom node</strong>
      </div>
      <div className="custom-node__body">
        {Object.entries(data.selects).map(([key, value]) => (
          <Select key={key} nodeId={id} handleId={key} value={value} />
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

function Select({
  value,
  handleId,
  nodeId,
}: {
  handleId: string;
  value: string;
  nodeId: string;
}) {
  const { setNodes } = useReactFlow();
  const store = useStoreApi();

  return (
    <div className="custom-node__select">
      <div>Edge Type</div>
      <select
        className="nodrag"
        onChange={(evt) => {
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
        }}
        value={value}
      >
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
