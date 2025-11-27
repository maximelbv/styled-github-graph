import GithubContributionGraph from "../StyledGithubGraph";
import TemplateWrapper from "../TemplateWrapper";

type Contribution = { date: string; count: number; level: number };

const graphData = [
  {
    props: {
      username: "torvalds",
      columns: 20,
      displayName: true,
    },
    codeToCopy: `<GithubContributionGraph
  username="torvalds"
  columns={20}
  displayName: true
/>`,
  },
  {
    props: {
      username: "torvalds",
      columns: 7,
      theme: "red",
      tileStyles: { borderRadius: "0", width: "15px", height: "15px" },
      gridStyles: { gap: "1px" },
    },
    codeToCopy: `<GithubContributionGraph
  username="torvalds"
  columns={7}
  theme="red"
  tileStyles={{ borderRadius: "0", width: "15px", height: "15px" }}
  gridStyles={{ gap: "1px" }}
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
  columns={100}
  theme="gray"
  tileStyles={{ width: "3px", height: "40px", borderRadius: "0" }}
  gridStyles={{ gap: "0" }}
/>`,
  },
  {
    props: {
      username: "torvalds",
      rows: 16,
      columns: 7,
      theme: "blue",
      tileStyles: {
        width: "10px",
        height: "10px",
        clipPath:
          "polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%)",
      },
      gridStyles: { gap: "3px 1px" },
    },
    codeToCopy: `<GithubContributionGraph
  username="torvalds"
  rows={16}
  columns={7}
  theme="blue"
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
      rows: 1,
      columns: 7,
      theme: "purple",
      tileStyles: { borderRadius: "3px", width: "30px", height: "80px" },
      displayName: true,
    },
    codeToCopy: `<GithubContributionGraph
  username="torvalds"
  rows={1}
  columns={7}
  theme="purple"
  tileStyles={{ borderRadius: "3px", width: "30px", height: "80px" }}
  displayName={true}
/>`,
  },
  {
    props: {
      username: "torvalds",
      rows: 7,
      columns: 10,
      theme: "pink",
      tileStyles: {
        width: "20px",
        height: "20px",
        clipPath:
          "polygon(50% 0%, 65% 35%, 100% 50%, 65% 65%, 50% 100%, 35% 65%, 0% 50%, 35% 35%)",
        boxShadow: "0 0 5px 2px #EC4899",
      },
      gridStyles: { gap: "4px" },
    },
    codeToCopy: `<GithubContributionGraph
  username="torvalds"
  rows={7}
  columns={10}
  theme="pink"
  tileStyles={{
    width: "20px",
    height: "20px",
    clipPath: "polygon(50% 0%, 65% 35%, 100% 50%, 65% 65%, 50% 100%, 35% 65%, 0% 50%, 35% 35%)",
    boxShadow: "0 0 5px 2px #EC4899",
  }}
  gridStyles={{ gap: "4px" }}
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
      rows: 7,
      columns: 20,
      theme: "green",
      tileStyles: {
        borderRadius: "4px",
        clipPath:
          "polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%)",
        width: "12px",
        height: "12px",
      },
      gridStyles: { gap: "4px" },
    },
    codeToCopy: `<GithubContributionGraph
  username="torvalds"
  rows={7}
  columns={3}
  theme="green"
  tileStyles={{ borderRadius: "4px", width: "100px", height: "30px" }}
  gridStyles={{ gap: "1px" }}
/>`,
  },
  {
    props: {
      username: "torvalds",
      rows: 16,
      columns: 20,
      theme: "orange",
      tileStyles: { borderRadius: "3px", width: "7px", height: "7px" },
    },
    codeToCopy: `<GithubContributionGraph
  username="torvalds"
  rows={16}
  columns={20}
  theme="orange"
  tileStyles={{ borderRadius: "3px", width: "7px", height: "7px" }}
/>`,
  },
  {
    props: {
      username: "torvalds",
      rows: 4,
      columns: 12,
      theme: "yellow",
      tileStyles: { borderRadius: "20px", width: "20px", height: "20px" },
      displayName: true,
    },
    codeToCopy: `<GithubContributionGraph
  username="torvalds"
  rows={4}
  columns={12}
  theme="yellow"
  tileStyles={{ borderRadius: "20px", width: "20px", height: "20px" }}
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
      columns: 7,
      theme: "purple",
      tileStyles: {
        width: "20px",
        height: "20px",
        mask: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z'/><path d='m3.3 7 8.7 5 8.7-5'/><path d='M12 22V12'/></svg>") center / contain no-repeat`,
        WebkitMask: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z'/><path d='m3.3 7 8.7 5 8.7-5'/><path d='M12 22V12'/></svg>") center / contain no-repeat`,
      },
    },
    codeToCopy: `<GithubContributionGraph
  username="torvalds"
  rows={7}
  columns={7}
  theme="purple"
  tileStyles={{
    width: "20px",
    height: "20px",
    mask: \`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z'/><path d='m3.3 7 8.7 5 8.7-5'/><path d='M12 22V12'/></svg>") center / contain no-repeat\`,
    WebkitMask: \`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z'/><path d='m3.3 7 8.7 5 8.7-5'/><path d='M12 22V12'/></svg>") center / contain no-repeat\`,
  }}
/>`,
  },
] as const;

const apiBaseUrl = "https://github-contributions-api.jogruber.de";

const fetchContributions = async (
  username: string
): Promise<Contribution[]> => {
  const res = await fetch(`${apiBaseUrl}/v4/${username}?y=last`, {
    next: { revalidate: 3600 },
  });
  console.log("Fetching contributions for", username);
  const data = await res.json();
  return data.contributions || [];
};

const TemplatesSection = async () => {
  const usernames = Array.from(
    new Set(graphData.map((item) => item.props.username))
  );
  const contributionsMap = Object.fromEntries(
    await Promise.all(
      usernames.map(async (username) => [
        username,
        await fetchContributions(username),
      ])
    )
  );
  const graphDataWithServer = graphData.map((item) => ({
    ...item,
    serverData: contributionsMap[item.props.username],
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 md:px-4 w-full max-w-[1400px]">
      {graphDataWithServer.map((item, i) => (
        <TemplateWrapper key={i} codeToCopy={item.codeToCopy}>
          <GithubContributionGraph
            {...item.props}
            serverData={item.serverData}
          />
        </TemplateWrapper>
      ))}
    </div>
  );
};

export default TemplatesSection;
