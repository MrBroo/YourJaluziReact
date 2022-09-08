import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import bgImage from "assets/images/beige-550x550w.jpg";
import ReorderIcon from "@mui/icons-material/Reorder";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HomeIcon from "@mui/icons-material/Home";
import RollerShadesIcon from "@mui/icons-material/RollerShades";
import MKBox from "../../../components/MKBox";
import MKBadge from "../../../components/MKBadge";
import MKTypography from "../../../components/MKTypography";

export default function TimeLine() {
  return (
    <>
      <Grid
        container
        item
        xs={12}
        md={12}
        lg={6}
        flexDirection="column"
        alignItems="center"
        sx={{ textAlign: "center", mt: 12, mx: "auto", px: 0.75 }}
      >
        <MKBadge
          variant="contained"
          color="info"
          badgeContent="Янгиланган"
          container
          sx={{ mb: 1 }}
        />
        <MKTypography variant="h2" fontWeight="bold">
          Таййорлов жараёни
        </MKTypography>
        <MKTypography variant="body1" color="text">
          Цехдан Ҳонадонингизгача сифатли йўл
        </MKTypography>
      </Grid>
      <Grid container mt={5} alignItems="center">
        <Grid item xs={12} sm={12} md={12} lg={5} mt={2}>
          <MKBox component="img" src={bgImage} borderRadius="12px" width="100%" />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={7}>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="info">
                  <ReorderIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Завод
                </Typography>
                <Typography>Сифатли жалюзи ўрамларини олиш</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="info">
                  <RollerShadesIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Жалюзи ясалиши
                </Typography>
                <Typography>Профессионал ишчилар томонидан ясалиши</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="info">
                  <LocalShippingIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Етказиш
                </Typography>
                <Typography>Эхтиёткорлик билан уйингизга етказилиши</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="info">
                  <HomeIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  Ўнатиш
                </Typography>
                <Typography>Профессионал усталар орқали уйингизга ўрнатилиши</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
      </Grid>
    </>
  );
}
