import React from "react";
import { PageHeaderContainer, HeaderAction } from "../../shared/layout";
import { Button, BreadcrumbItem, Breadcrumb } from "carbon-components-react";

interface PageHeaderProps {
  action?: React.Dispatch<React.SetStateAction<any>>;
  breadcrumb: Array<{
    text: string;
    isCurrentPage: boolean;
    link?: string;
  }>;
  buttonText?: string;
  icon?: React.ReactNode;
  headerText: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <PageHeaderContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Breadcrumb noTrailingSlash={true}>
          {props.breadcrumb.map((item, index) => (
            <BreadcrumbItem
              key={index}
              isCurrentPage={item.isCurrentPage}
              href={item.link}
            >
              {item.text}
            </BreadcrumbItem>
          ))}
        </Breadcrumb>
        <h2>{props.headerText}</h2>
      </div>
      {props.buttonText ? (
        <HeaderAction>
          <Button
            onClick={props.action}
            renderIcon={props.icon}
            iconDescription={props.buttonText}
            size={"field"}
          >
            {props.buttonText}
          </Button>
        </HeaderAction>
      ) : (
        ""
      )}
    </PageHeaderContainer>
  );
};

export default PageHeader;
