import GithubContributionGraph from "../StyledGithubGraph";
import TemplateWrapper from "../TemplateWrapper";

const TemplatesSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2 md:px-4 w-full max-w-[1400px]">
      <TemplateWrapper>
        <GithubContributionGraph
          username="torvalds"
          columns={7}
          theme="purple"
          tileStyles={{ borderRadius: "0", width: "15px", height: "15px" }}
          gridStyles={{ gap: "1px" }}
        />
      </TemplateWrapper>
      <TemplateWrapper>
        <GithubContributionGraph
          username="torvalds"
          rows={4}
          columns={12}
          theme="red"
          tileStyles={{ borderRadius: "20px", width: "20px", height: "20px" }}
          displayName={true}
        />
      </TemplateWrapper>
      <TemplateWrapper>
        <GithubContributionGraph
          username="torvalds"
          rows={1}
          columns={7}
          theme="orange"
          tileStyles={{ borderRadius: "3px", width: "30px", height: "80px" }}
          displayName={true}
        />
      </TemplateWrapper>
      <TemplateWrapper>
        <GithubContributionGraph
          username="torvalds"
          rows={20}
          columns={20}
          theme="blue"
          tileStyles={{ borderRadius: "3px", width: "7px", height: "7px" }}
          enableTooltip={false}
        />
      </TemplateWrapper>
      <TemplateWrapper>A</TemplateWrapper>
      <TemplateWrapper>A</TemplateWrapper>
    </div>
  );
};

export default TemplatesSection;
