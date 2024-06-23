import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Restaurant</Typography>
        <p>
        <b>"Welcome to my Restaurant"</b> sets the tone for a warm and inviting dining experience, where every guest is embraced with hospitality and culinary delight. As you step through the doors, a cozy ambiance envelops you, characterized by soft lighting, tasteful decor, and perhaps the faint aroma of freshly prepared dishes drifting from the kitchen.

The phrase itself is more than a greeting; it embodies a promise of exceptional service and a commitment to gastronomic pleasure. Whether it's a quaint bistro showcasing local flavors or a chic eatery offering international cuisine, the essence remains consistent: a dedication to ensuring each visitor feels not just welcomed, but cherished.

In this restaurant, the welcome extends beyond mere words. It's reflected in the attentive staff members who anticipate your needs with a genuine smile. Perhaps it's the chef-owner who occasionally emerges from the kitchen to greet patrons personally, ensuring their dining experience exceeds expectations.

The menu is a testament to culinary craftsmanship, carefully curated to satisfy diverse palates. From signature dishes that evoke nostalgia to innovative creations that push the boundaries of flavor, each plate is a work of art designed to tantalize and delight.

The atmosphere hums with a convivial energy, whether you're enjoying a romantic dinner for two, a lively gathering of friends, or a celebratory family meal. Conversations flow freely, punctuated by laughter and the clinking of glasses.

"Welcome to my restaurant" encapsulates a promise of quality, where every detail, from the ingredients sourced to the presentation of each dish, is meticulously crafted. It's an invitation to savor not just a meal, but an experience—an experience that leaves a lasting impression, compelling you to return time and again to rediscover the warmth and flavors that make this restaurant a cherished culinary destination.
        </p>
        <br />
        <p>
        
        </p>
      </Box>
    </Layout>
  );
};

export default About;
