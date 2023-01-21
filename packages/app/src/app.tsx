import { Command } from "@tauri-apps/api/shell";
import { ComposeElements, CustomQueryClientProvider } from "./components/misc";
import { useQuery } from "@tanstack/react-query";

export function App() {
  // prettier-ignore
  return (
    <ComposeElements elements={[
      <CustomQueryClientProvider />,
      <AppInner />,
    ]} />
  );
}

function AppInner() {
  const pwDumpQuery = useQuery({
    queryKey: ["pw-dump"],
    queryFn: () => {
      return new Command("pw-dump").execute();
    },
    keepPreviousData: true,
    enabled: false,
  });

  return (
    <div className="h-full p-4">
      <div className="h-full flex flex-col gap-2">
        <button
          className="antd-btn antd-btn-primary px-2 flex justify-center items-center relative"
          onClick={() => pwDumpQuery.refetch()}
          disabled={pwDumpQuery.isFetching}
        >
          run pw-dump
          {pwDumpQuery.isFetching && (
            <span className="spinner w-4 h-4 absolute right-2"></span>
          )}
        </button>
        <pre className="flex-1 border p-2 bg-gray-50 overflow-auto text-sm font-mono">
          {pwDumpQuery.isSuccess && pwDumpQuery.data.stdout}
        </pre>
      </div>
    </div>
  );
}
