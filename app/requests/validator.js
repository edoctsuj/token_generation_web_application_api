module.exports = {
  validateBody: (schema) => {
    return (req, res, next) => {
      const result = schema.validate(req.body);
      if (result.error) {
        const errorMessages = result.error.details.map(
          (detail) => detail.message
        );
        return res.status(400).json({ errors: errorMessages });
      } else {
        next();
      }
    };
  },
  validateQuery: (schema) => {
    return (req, res, next) => {
      const result = schema.validate(req.query);
      if (result.error) {
        const errorMessages = result.error.details.map(
          (detail) => detail.message
        );
        return res.status(400).json({ errors: errorMessages });
      } else {
        next();
      }
    };
  },
};
