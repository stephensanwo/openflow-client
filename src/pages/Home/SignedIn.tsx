import React from "react";
import styled from "styled-components";
import { Tile, Button } from "carbon-components-react";
import { Flow16, EdgeNodeAlt16 } from "@carbon/icons-react";
import { StateColors } from "../../shared/themes";
import Notification from "../../components/Notification";
import { Link } from "react-router-dom";

const SignedInContainer = styled.div`
  height: 90vh;
  padding: 10% 0px 20px 5%;
`;

const SignedInActions = styled.div`
  display: flex;
  margin-top: 60px;
  gap: 100px;
`;

const SignedInOthers = styled.div`
  display: flex;
  color: "#fff";
  margin-top: 100px;
  gap: 60px;
`;

const SignedIn = () => {
  return (
    <SignedInContainer>
      <h2>Welcome, Stephen Sanwo</h2>
      <SignedInActions>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div>
            <small>Graphically Build Analytics Workflow</small>
            <h4>Flow Studio</h4>
          </div>
          <Link to="/flow">
            <Button
              renderIcon={Flow16}
              iconDescription="Run Flow"
              size={"field"}
            >
              Create Flow
            </Button>
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div>
            <small>Create Re-usable Nodes for Users</small>
            <h4>Node Designer</h4>
          </div>
          <Link to="/node">
            <Button
              renderIcon={EdgeNodeAlt16}
              iconDescription="Run Flow"
              size={"field"}
              kind="secondary"
            >
              Create Nodes
            </Button>
          </Link>
        </div>
      </SignedInActions>

      <SignedInOthers>
        <div
          style={{
            width: "350px",
          }}
        >
          <Tile
            style={{
              width: "100%",
              height: "150px",
              backgroundColor: StateColors.neutral,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                height: "100%",
              }}
            >
              <h5 style={{ color: StateColors.running }}>Flow Activity</h5>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  gap: "10%",
                }}
              >
                <div>
                  <h2 style={{ color: StateColors.running }}>15</h2>
                  <small>Flow Activity</small>
                </div>
                <div>
                  <h2 style={{ color: StateColors.failed }}>10</h2>
                  <small>Failed Flows</small>
                </div>
                <div style={{ color: StateColors.open }}>
                  <h2>4</h2>
                  <small>Running Flows</small>
                </div>
                <div>
                  <h2 style={{ color: StateColors.running }}>1</h2>
                  <small>Open Flows</small>
                </div>
              </div>
            </div>
          </Tile>
          <Tile
            style={{
              width: "100%",
              height: "150px",
              backgroundColor: StateColors.neutral,
              marginTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
                height: "100%",
              }}
            >
              <h5 style={{ color: StateColors.running }}>Your Nodes</h5>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  gap: "10%",
                }}
              >
                <div>
                  <h2 style={{ color: StateColors.running }}>15</h2>
                  <small>Component Nodes</small>
                </div>
                <div>
                  <h2 style={{ color: StateColors.running }}>10</h2>
                  <small>Code Nodes</small>
                </div>
                <div style={{ color: StateColors.running }}>
                  <h2>4</h2>
                  <small>Marketplace</small>
                </div>
              </div>
            </div>
          </Tile>
        </div>
        <div
          style={{
            width: "40%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h5>Notifications and Errors</h5>
            <h6 style={{ color: "#1f70ff" }}>View All</h6>
          </div>{" "}
          <Notification
            title={"Runtime Errors"}
            subtitle={"Runtime errors will be displayed here"}
            caption={
              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                {"Time: 00:00:00 AM"}
                <Button
                  kind="ghost"
                  size="small"
                  style={{ marginBotton: "100px" }}
                >
                  View Detailed Error Message
                </Button>
              </div>
            }
            kind="info"
            hideCloseButton={true}
            styles={{ height: "135px", marginTop: "14px" }}
          />
          <Notification
            title={"Runtime Errors"}
            subtitle={"Runtime errors will be displayed here"}
            caption={
              <div
                style={{ display: "flex", alignItems: "center", gap: "20px" }}
              >
                {"Time: 00:00:00 AM"}
                <Button
                  kind="ghost"
                  size="small"
                  style={{ marginBotton: "100px" }}
                >
                  View Detailed Error Message
                </Button>
              </div>
            }
            kind="error"
            hideCloseButton={true}
            styles={{ height: "135px", marginTop: "14px" }}
          />
        </div>
      </SignedInOthers>
    </SignedInContainer>
  );
};

export default SignedIn;
