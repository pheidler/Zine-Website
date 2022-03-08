import React from "react";
import { Button, Card, Stack } from "react-bootstrap";
import { Share, Download } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

function ZineCard(props) {
  const navigate = useNavigate();
  const { zine } = props;
  return (
    <Card>
      <Card.Img
        onClick={() => {
          navigate(`/zines/${zine.path}`);
        }}
        variant="top"
        src={zine.thumbnail.default}
      />
      <Card.Body>
        <Card.Title>{zine.title}</Card.Title>
        <Stack gap={3} direction="horizontal">
          <Share size={20} />
          <Download size={20} />
          <Button
            variant="primary"
            onClick={() => {
              navigate(`/zines/${zine.path}`);
            }}
          >
            Open
          </Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}
export default ZineCard;
