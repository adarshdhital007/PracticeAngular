import { Component } from '@angular/core';

@Component({
  selector: 'app-date-list',
  templateUrl: './date-list.component.html',
  styleUrls: ['./date-list.component.css']
})
export class DateListComponent {
  songInfo: { name: string, date: Date}[] = [
    { name: 'Love Story', date: new Date('2008-09-15')},
    { name: 'You Belong with Me', date: new Date('2008-11-04')},
    { name: 'Blank Space', date: new Date('2014-11-10') },
    { name: 'Shake It Off', date: new Date('2014-08-18') },
    { name: 'Lover', date: new Date('2019-08-16') },
    { name: 'All Too Well', date: new Date('2012-10-22') },
    { name: 'I Knew You Were Trouble', date: new Date('2012-10-09') },
    { name: 'Delicate', date: new Date('2017-03-12') },
    { name: 'Style', date: new Date('2014-02-09') },
    { name: 'Wildest Dreams', date: new Date('2014-08-31') },
    { name: 'Back to December', date: new Date('2010-10-05') },
    { name: 'Red', date: new Date('2012-06-21') },
    { name: 'Mine', date: new Date('2010-08-04') },
    { name: 'Dear John', date: new Date('2010-10-25') },
    { name: 'New Romantics', date: new Date('2016-02-09') },
    { name: 'Speak Now', date: new Date('2010-10-25') },
    { name: 'Ours', date: new Date('2010-09-27') },
    { name: 'Begin Again', date: new Date('2012-10-01') },
    { name: 'White Horse', date: new Date('2008-12-07') },
    { name: 'Fearless', date: new Date('2009-01-16') },
    { name: 'The Man', date: new Date('2019-12-27') },
    { name: 'Cardigan', date: new Date('2020-07-24') },
    { name: 'Willow', date: new Date('2020-12-11') },
    { name: 'Our Song', date: new Date('2006-09-25') },
    { name: 'Tim McGraw', date: new Date('2006-06-19') },
    { name: 'Should\'ve Said No', date: new Date('2007-05-19') },
    { name: 'Change', date: new Date('2008-08-08') },
    { name: 'Fifteen', date: new Date('2008-08-19') },
    { name: 'Teardrops on My Guitar', date: new Date('2007-02-19') },
    { name: 'The 1', date: new Date('2020-07-24') },
    { name: 'August', date: new Date('2020-07-24') },
    { name: 'Betty', date: new Date('2020-07-24') },
    { name: 'Invisible String', date: new Date('2020-07-24') },
  ];
  searchTerm: string = '';
}
