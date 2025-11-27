const props = [
  {
    property: "username",
    type: "string",
    default: "required",
    description: "GitHub username to fetch contributions for.",
  },
  {
    property: "apiBaseUrl",
    type: "string",
    default: `"https://...jogruber.de"`,
    description: "Base URL of the contributions API.",
  },
  {
    property: "rows",
    type: "number",
    default: "7",
    description:
      "Number of rows (days) per column in the graph. Usually 7 for a full week view.",
  },
  {
    property: "columns",
    type: "number",
    default: "52",
    description: "Number of columns to display.",
  },
  {
    property: "tileStyles",
    type: "CSSProperties",
    default: "{}",
    description: "Custom styles applied to each contribution tile.",
  },
  {
    property: "gridStyles",
    type: "CSSProperties",
    default: "{}",
    description: "Custom styles applied to the entire grid container.",
  },
  {
    property: "theme",
    type: `Theme`,
    default: `"green"`,
    description: "Color theme for the contribution tiles.",
  },
  {
    property: "enableTooltip",
    type: "boolean",
    default: "true",
    description: "Whether to enable custom tooltips on hover.",
  },
  {
    property: "displayName",
    type: "boolean",
    default: "false",
    description: "Whether to enable the username.",
  },
  {
    property: "serverData",
    type: "Contribution[]",
    default: "undefined",
    description:
      "Optional pre-fetched contributions to avoid client-side fetch. Use this for server-rendering.",
  },
];

const PropsSection = () => {
  return (
    <div className="mt-24 px-2 md:px-4 w-full max-w-[1400px] flex flex-col gap-4">
      <span className="text-6xl font-black tracking-tighter">Props</span>
      <div
        id="props-section"
        className="rounded-lg border border-border overflow-scroll"
      >
        <table className="w-full min-w-full table-auto text-left text-sm">
          <thead>
            <tr className="border-b border-border bg-background-element">
              <th className="p-4 font-semibold text-lg text-foreground">
                Property
              </th>
              <th className="p-4 font-semibold text-lg text-foreground">
                Type
              </th>
              <th className="p-4 font-semibold text-lg text-foreground">
                Default
              </th>
              <th className="p-4 font-semibold text-lg text-foreground">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-background">
            {props.map((prop, index) => (
              <tr
                key={index}
                className="hover:bg-background-element/20 transition-colors"
              >
                <td className="p-4 font-medium text-foreground">
                  {prop.property}
                </td>
                <td className="p-4">
                  <code className="rounded border border-border bg-background-element px-1.5 py-1 font-mono text-xs text-foreground-secondary">
                    {prop.type}
                  </code>
                </td>
                <td className="p-4">
                  <code className="rounded border border-border bg-background-element px-1.5 py-1 font-mono text-xs text-foreground-secondary">
                    {prop.default}
                  </code>
                </td>
                <td className="p-4 text-foreground">{prop.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PropsSection;
