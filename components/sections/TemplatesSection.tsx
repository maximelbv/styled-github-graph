import GithubContributionGraph from "../StyledGithubGraph";
import TemplateWrapper from "../TemplateWrapper";

const graphData = [
  {
    props: {
      username: "torvalds",
      columns: 20,
    },
    codeToCopy: `<GithubContributionGraph
  username="torvalds"
  columns={20}
/>`,
  },
  {
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
    props: {
      username: "torvalds",
      rows: 16,
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
  {
    props: {
      username: "torvalds",
      rows: 10,
      columns: 30,
      theme: "green",
      tileStyles: {
        borderRadius: "0",
        width: "4px",
        height: "4px",
      },
      gridStyles: { gap: "0" },
    },
    codeToCopy: `<GithubContributionGraph
  username="torvalds"
  rows={25}
  columns={50}
  theme="green"
  tileStyles={{
    borderRadius: "0",
    width: "4px",
    height: "4px",
    boxShadow: "0 0 2px rgba(34, 197, 94, 0.5)",
  }}
  gridStyles={{ gap: "0" }}
/>`,
  },
  {
    props: {
      username: "torvalds",
      rows: 7,
      columns: 20,
      theme: "red",
      tileStyles: { borderRadius: "0", width: "15px", height: "15px" },
      gridStyles: { gap: "0" },
      displayName: true,
    },
    codeToCopy: `<GithubContributionGraph
  username="torvalds"
  rows={7}
  columns={20}
  theme="red"
  tileStyles={{ borderRadius: "0", width: "15px", height: "15px" }}
  gridStyles={{ gap: "0" }}
  displayName={true}
/>`,
  },
  {
    props: {
      username: "torvalds",
      rows: 4,
      columns: 50,
      theme: "gray",
      tileStyles: { borderRadius: "1px", width: "6px", height: "6px" },
      gridStyles: { gap: "0 4px" },
    },
    codeToCopy: `<GithubContributionGraph
  username="torvalds"
  rows={4}
  columns={50}
  theme="gray"
  tileStyles={{ borderRadius: "1px", width: "6px", height: "6px" }}
  gridStyles={{ gap: "0 4px" }}
/>`,
  },
  {
    props: {
      username: "torvalds",
      rows: 7,
      columns: 52,
      theme: "pink",
      tileStyles: {
        width: "12px",
        height: "12px",
        // Étoile à 8 pointes
        clipPath:
          "polygon(50% 0%, 65% 35%, 100% 50%, 65% 65%, 50% 100%, 35% 65%, 0% 50%, 35% 35%)",
        boxShadow: "0 0 5px 2px #EC4899",
      },
      gridStyles: { gap: "4px" },
    },
    codeToCopy: `<GithubContributionGraph
  username="torvalds"
  rows={7}
  columns={52}
  theme="pink"
  tileStyles={{
    width: "12px",
    height: "12px",
    clipPath: "polygon(50% 0%, 65% 35%, 100% 50%, 65% 65%, 50% 100%, 35% 65%, 0% 50%, 35% 35%)",
    boxShadow: "0 0 5px 2px #EC4899",
  }}
  gridStyles={{ gap: "4px" }}
/>`,
  },
  {
    props: {
      username: "torvalds",
      rows: 16,
      columns: 7,
      theme: "red",
      tileStyles: {
        width: "10px",
        height: "10px",
        // Forme d'explosion (beaucoup de points)
        clipPath:
          "polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)",
      },
      gridStyles: { gap: "3px 1px" },
    },
    codeToCopy: `<GithubContributionGraph
  username="torvalds"
  rows={52}
  columns={7}
  theme="red"
  tileStyles={{
    width: "10px",
    height: "10px",
    clipPath: "polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)",
  }}
  gridStyles={{ gap: "3px 1px" }}
/>`,
  },
  {
    props: {
      username: "torvalds",
      rows: 10,
      columns: 20,
      theme: "blue",
      gridStyles: { gap: "2px", transform: "skewY(-12deg)" },
      tileStyles: { width: "10px", height: "10px", borderRadius: "50%" },
    },
    codeToCopy: `<GithubContributionGraph
  username="torvalds"
  rows={10}
  columns={20}
  theme="blue"
  gridStyles={{ gap: "2px", transform: "skewY(-6deg)" }}
  tileStyles={{ width: "10px", height: "10px", borderRadius: "50%" }}
/>`,
  },
  {
    props: {
      username: "torvalds",
      rows: 1,
      columns: 100,
      theme: "gray",
      tileStyles: { width: "3px", height: "40px", borderRadius: "0" },
      gridStyles: { gap: "0" },
    },
    codeToCopy: `<GithubContributionGraph
  username="torvalds"
  rows={1}
  columns={365}
  theme="gray"
  tileStyles={{ width: "3px", height: "40px", borderRadius: "0" }}
  gridStyles={{ gap: "0" }}
/>`,
  },
] as const;

const TemplatesSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 md:px-4 w-full max-w-[1400px]">
      {graphData.map((item, i) => (
        <TemplateWrapper key={i} codeToCopy={item.codeToCopy}>
          <GithubContributionGraph {...item.props} />
        </TemplateWrapper>
      ))}
    </div>
  );
};

export default TemplatesSection;
