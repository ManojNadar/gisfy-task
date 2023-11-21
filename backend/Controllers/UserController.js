import Details from "../Models/Details.js";

export const register = async (req, res) => {
  try {
    const { img } = req.body;
    const { name, classes, link } = req.body.data;

    console.log(img, "backend img");
    console.log(name, classes, link, "backend name,classes,link");

    if (!name || !classes || !link || !img) {
      return res.statuse(404).json({
        success: false,
        message: "All fields are mandatory",
      });
    }

    const newDetails = new Details({
      name,
      classes,
      link,
      img,
    });

    await newDetails.save();

    return res.status(201).json({
      success: true,
      message: "details added",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const fetchDetails = async (req, res) => {
  try {
    const fetchingDetails = await Details.find({});

    if (fetchingDetails) {
      console.log(fetchingDetails);
      return res.status(200).json({
        success: true,
        details: fetchingDetails,
      });
    }

    return res.status(404).json({
      success: false,
      message: "error on fetching data",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
