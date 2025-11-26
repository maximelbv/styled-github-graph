import GithubContributionGraph from "../StyledGithubGraph";
import TemplateWrapper from "../TemplateWrapper";

const graphData = [
  {
    id: 1,
    props: {
      username: "torvalds",
      columns: 7,
      theme: "purple",
      tileStyles: { borderRadius: "0", width: "15px", height: "15px" },
      gridStyles: { gap: "1px" },
    },
    codeToCopy: `<GithubContributionGraph
  username="torvalds"
  columns={7}
  theme="purple"
  tileStyles={{ borderRadius: "0", width: "15px", height: "15px" }}
  gridStyles={{ gap: "1px" }}
/>`,
  },
  {
    id: 2,
    props: {
      username: "torvalds",
      rows: 4,
      columns: 12,
      theme: "red",
      tileStyles: { borderRadius: "20px", width: "20px", height: "20px" },
      displayName: true,
    },
    codeToCopy: `<GithubContributionGraph
  username="torvalds"
  rows={4}
  columns={12}
  theme="red"
  tileStyles={{ borderRadius: "20px", width: "20px", height: "20px" }}
  displayName={true}
/>`,
  },
  {
    id: 3,
    props: {
      username: "torvalds",
      rows: 1,
      columns: 7,
      theme: "orange",
      tileStyles: { borderRadius: "3px", width: "30px", height: "80px" },
      displayName: true,
    },
    codeToCopy: `<GithubContributionGraph
  username="torvalds"
  rows={1}
  columns={7}
  theme="orange"
  tileStyles={{ borderRadius: "3px", width: "30px", height: "80px" }}
  displayName={true}
/>`,
  },
  {
    id: 4,
    props: {
      username: "torvalds",
      rows: 20,
      columns: 20,
      theme: "blue",
      tileStyles: { borderRadius: "3px", width: "7px", height: "7px" },
      enableTooltip: false,
    },
    codeToCopy: `<GithubContributionGraph
  username="torvalds"
  rows={20}
  columns={20}
  theme="blue"
  tileStyles={{ borderRadius: "3px", width: "7px", height: "7px" }}
  enableTooltip={false}
/>`,
  },
] as const;

const TemplatesSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 md:px-4 w-full max-w-[1400px]">
      {graphData.map((item) => (
        <TemplateWrapper key={item.id} codeToCopy={item.codeToCopy}>
          <GithubContributionGraph {...item.props} />
        </TemplateWrapper>
      ))}
    </div>
  );
};

export default TemplatesSection;
