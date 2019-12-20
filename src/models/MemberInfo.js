export default class MemberInfo {

  constructor(data = {}, initModel = true) {
    if (initModel) {
      this.init(data);
    }
  }

  init(data) {
    this.MemberId = data.MemberId || undefined;
    this.Username = data.Username || "";
    this.DisplayName = data.DisplayName || "";
    this.FirstName = data.FirstName || "";
    this.LastName = data.LastName || "";
    this.AvatarUrl = data.AvatarUrl || "";
    this.XmppId = data.XmppId || "";
    this.XmppPassword = data.XmppPassword || "";
    this.LocationAddress = data.LocationAddress || "";
    this.IsOnline = data.IsOnline || false;
    this.MemberTypeId = data.MemberTypeId || undefined;
    this.Email = data.Email || "";
    this.Phone = data.Phone || "";
    this.Birthday = data.Birthday || undefined;
    this.Address = data.Address || "";
    this.DriverLicense = data.DriverLicense || null;
    this.GenderId = data.GenderId || undefined;
  }
}
