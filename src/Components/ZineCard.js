import React from "react";
import { Button, Card, OverlayTrigger, Popover, Stack } from "react-bootstrap";
import {
  Share,
  Download,
  Clipboard,
  ClipboardCheck,
} from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledZineCard = styled(Card)`
  background-color: #befed6;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border: lightgray 1px solid;
`;

const CardThumbnail = styled(Card.Img)`
  width: 95%;
  margin: 10px auto;
  border: lightgray 2px solid;
`;

const CardTitle = styled(Card.Title)`
  text-align: end;
  margin: -10px 0px 10px 0px;
`;

const ButtonStack = styled(Stack)`
  align-items: center;
  justify-content: flex-end;
`;

const RoundedContainer = styled.div`
  height: 40px;
  width: 40px;
  background: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -khtml-border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: lightcyan;
    cursor: pointer;
  }
`;

// @ts-ignore
const DownloadIcon = styled(Download)`
  width: 60%;
  height: 60%;
  margin: auto;
  color: black;
`;

// @ts-ignore
const LinkIcon = styled(Share)`
  width: 60%;
  height: 60%;
  margin: auto;
  color: black;
  margin-left: 6px;
`;

const LinkPopover = styled(Popover)`
  width: 300px;
  height: 100px;
  z-index: 10000;
`;

const LinkPopoverText = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const CopyToClipboardButton = styled(Clipboard)`
  cursor: pointer;
`;

const CopyToClipboardCheck = styled(ClipboardCheck)`
  cursor: pointer;
`;

const OpenZineButton = styled(Button)`
  background-color: #004160;
  border-color: #004160;
  height: 38px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  :hover {
    background-color: #2278a0;
    border-color: #2278a0;
  }
`;

function ZineCard(props) {
  const navigate = useNavigate();
  const [copyLinkButtonClicked, setCopyLinkButtonClicked] =
    React.useState(false);
  const { zine } = props;
  return (
    <StyledZineCard>
      <CardThumbnail
        onClick={() => {
          navigate(`/zines/${zine.path}`);
        }}
        variant="top"
        src={zine.thumbnail.default}
      />
      <Card.Body>
        <CardTitle>{zine.title}</CardTitle>
        <ButtonStack gap={3} direction="horizontal">
          <a href={zine.file} download={`${zine.path}.pdf`}>
            <RoundedContainer>
              <DownloadIcon />
            </RoundedContainer>
          </a>

          <OverlayTrigger
            trigger="click"
            placement="bottom"
            onExit={() => setCopyLinkButtonClicked(false)}
            overlay={
              <LinkPopover>
                <Popover.Header as="h3">Copy Link</Popover.Header>
                <Popover.Body>
                  <Stack direction="horizontal">
                    <LinkPopoverText>{`${window.location.href}/zines/${zine.path}`}</LinkPopoverText>
                    {!copyLinkButtonClicked ? (
                      <CopyToClipboardButton
                        size={30}
                        onClick={() => {
                          navigator.clipboard.writeText(
                            `${window.location.href}#/zines/${zine.path}`
                          );
                          setCopyLinkButtonClicked(true);
                        }}
                      />
                    ) : (
                      //@ts-ignore
                      <CopyToClipboardCheck
                        size={30}
                        style={{ color: "green" }}
                      />
                    )}
                  </Stack>
                </Popover.Body>
              </LinkPopover>
            }
          >
            <RoundedContainer>
              <LinkIcon />
            </RoundedContainer>
          </OverlayTrigger>

          <OpenZineButton
            onClick={() => {
              navigate(`/zines/${zine.path}`);
            }}
          >
            Open
          </OpenZineButton>
        </ButtonStack>
      </Card.Body>
    </StyledZineCard>
  );
}
export default ZineCard;
