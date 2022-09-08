import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import * as React from "react";
import DefaultCounterCard from "../../../examples/Cards/CounterCards/DefaultCounterCard";

function Information() {
  return (
    <Container sx={{ mt: 8, mb: 6 }}>
      <Grid container justifyContent="center" sx={{ textAlign: "center" }}>
        <Grid item xs={12} md={4}>
          <DefaultCounterCard
            count={1000}
            suffix="+"
            separator=","
            title="Хизматлар"
            description="Ҳозирда биз жамоамиз билан 1000дан ортиқ хонадонга сифатли хизмат кўрсатганмиз"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <DefaultCounterCard
            count={200}
            suffix="+"
            separator=","
            title="Жалюзилар"
            description="Бизда 200 хил турдаги жалюзи ва жалюзи маҳсулотлари мавжуд"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <DefaultCounterCard
            count={24}
            suffix="/7"
            title="Алоқа хизмати"
            description="Биз билан исталган вақтда қўнғироқ қилиб боғланишингиз мумкин"
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Information;
