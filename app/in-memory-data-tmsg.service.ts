import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataTmsgService implements InMemoryDbService {
  createDb() {
    let counselors = [
      {idx: 0, loginid: 'administrator', status: 0, name: '관리자', password: '', issaveid: false, isautologin:  false }
    ];
    return {counselors};
  }
}
