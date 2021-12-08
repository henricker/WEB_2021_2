module.exports = function(fieldname, object) {
  return !!Object.keys(object).find((field) => field === fieldname)
}