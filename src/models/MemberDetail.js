export default class MemberDetail {

  constructor(data = {}, initModel = true) {
    if (initModel) {
      this.init(data);
    }
  }

  init(data) {
    this.MemberId = data.MemberId || null;
    this.Username = data.Username || "";
    this.DisplayName = data.DisplayName || "";
    this.FirstName = data.FirstName || "";
    this.LastName = data.LastName || "";
    this.AvatarUrl = data.AvatarUrl || null;
    this.XmppId = data.XmppId || null;
    this.Location = data.Location || null;
    this.LocationAddress = data.LocationAddress || null;
    this.IsOnline = data.IsOnline || false;
    this.MemberTypeId = data.MemberTypeId || null;
    this.StatusId = data.StatusId || null;
    this.SessionTokenId = data.SessionTokenId || null;
    this.VehicleNumber = data.VehicleNumber || null;
    this.Email = data.Email || null;
    this.Phone = data.Phone || null;
    this.Password = data.Password || null;
    this.IsLockedOut = data.IsLockedOut || false;
  }

}
