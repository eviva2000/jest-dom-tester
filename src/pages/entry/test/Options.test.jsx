import { render, screen } from "@testing-library/react";
import Options from "../Options";

test("display image for each scoop option from server (msw)", async () => {
  render(<Options optionType="scoops" />);

  //find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  //confirm alt text of images
  const altText = scoopImages.map((image) => image.alt);
  expect(altText).toEqual(["chocklate scoop", "vanila scoop"]);
});
