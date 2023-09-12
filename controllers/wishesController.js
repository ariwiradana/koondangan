import Wishes from "@/models/Wishes";

export const getWishes = async (req, res) => {
  const { limit, folder, theme } = req.query;

  try {
    let wishes;
    if (limit) {
      wishes = await Wishes.find({ folder, theme })
        .limit(limit)
        .sort({ created_at: -1 });
    } else {
      wishes = await Wishes.find({ folder, theme }).sort({ created_at: -1 });
    }
    const total = await Wishes.countDocuments({ folder, theme });

    const response = {
      success: true,
      data: wishes,
      total,
    };
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const setWishes = async (req, res) => {
  const { name, message, created_at, attend, folder, theme } = req.body;
  try {
    const response = await Wishes.create({
      name,
      message,
      created_at,
      attend,
      folder,
      theme,
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json(error);
  }
};
