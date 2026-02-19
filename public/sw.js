if (self.define) {
  let e, s = {};
  const i = (e, s) => (s = new URL(s + ".js", self.location), s.href);
  s[i] = new Promise(async e => { "document" in self ? e() : e() });
}
