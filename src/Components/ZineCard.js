import React from "react";
import { Button, Card, Stack } from "react-bootstrap";
import { Share, Download } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.css";

function ZineCard(props) {
  const navigate = useNavigate();
  const { zine } = props;
  return (
    <Card className={styles.card}>
      <Card.Img
        onClick={() => {
          navigate(`/zines/${zine.path}`);
        }}
        variant="top"
        src={zine.thumbnail.default}
        className={styles.cardImage}
      />
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styles.cardTitle}>{zine.title}</Card.Title>
        <Stack
          gap={3}
          direction="horizontal"
          className={styles.cardButtonStack}
        >
          <a href={zine.file} download={`${zine.path}.pdf`}>
            <Download className={styles.buttonIcon} size={20} />
          </a>

          <Share
            className={`${styles.buttonIcon} ${styles.linkIcon}`}
            size={20}
            onClick={() => console.log("Clicked")}
          />
          <Button
            className={styles.button}
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
