import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatTable} from '@angular/material/table';
import {DialogBoxComponent} from '../dialog-box/dialog-box.component';

export interface Persons {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  address: string;

}

const persons: Persons[] =
  [
    {
      'id': '5f7232ed414132d9a1a457f4',
      'firstName': 'Hensley Hurley',
      'lastName': 'Gilmore Hood',
      'gender': 'male',
      'email': 'gilmorehood@sunclipse.com',
      'address': '614 Arlington Place, Lindcove, New Hampshire, 2617'
    },
    {
      'id': '5f7232edd8e2d7fcf6f23905',
      'firstName': 'Fox Short',
      'lastName': 'Webster Logan',
      'gender': 'male',
      'email': 'websterlogan@sunclipse.com',
      'address': '320 Russell Street, Cannondale, Illinois, 6372'
    },
    {
      'id': '5f7232ed3c02958ac08f71ec',
      'firstName': 'Coleen Stanton',
      'lastName': 'Davis Quinn',
      'gender': 'male',
      'email': 'davisquinn@sunclipse.com',
      'address': '211 Coffey Street, Blandburg, Mississippi, 4419'
    },
    {
      'id': '5f7232eddde4e94ca7a62eff',
      'firstName': 'Donna Salazar',
      'lastName': 'Hobbs Sparks',
      'gender': 'male',
      'email': 'hobbssparks@sunclipse.com',
      'address': '824 Sunnyside Avenue, Genoa, Idaho, 883'
    },
    {
      'id': '5f7232edc949eaedb11a760e',
      'firstName': 'Jessie Harrell',
      'lastName': 'Battle Newton',
      'gender': 'male',
      'email': 'battlenewton@sunclipse.com',
      'address': '999 Metrotech Courtr, Norfolk, Vermont, 3737'
    },
    {
      'id': '5f7232ed115abb24946debce',
      'firstName': 'Antonia Sanford',
      'lastName': 'Angel Yates',
      'gender': 'female',
      'email': 'angelyates@sunclipse.com',
      'address': '396 Karweg Place, Fulford, Texas, 4714'
    }
  ]
;


@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  @ViewChild(MatTable, {static: true}) table: MatTable<any>;

  displayedColumns = ['firstName', 'lastName', 'gender',
    'email', 'address', 'action'];
  dataSource = persons;

  constructor(public dialog: MatDialog) {
  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '520px',
      height: '600px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'Add') {
        this.addRowData(result.data);
      } else if (result.event === 'Update') {
        this.updateRowData(result.data);
      } else if (result.event === 'Delete') {
        this.deleteRowData(result.data);
        console.log('result.data', result.data);
      }
    });
  }

  addRowData(row) {
    let d = Math.random().toString(36).substring(2, 9);

    this.dataSource.push({
      id: d,
      firstName: row.firstName,
      lastName: row.lastName,
      gender: row.gender,
      email: row.email,
      address: row.address

    });
    this.table.renderRows();

  }

  updateRowData(row) {
    this.dataSource = this.dataSource.filter((value, key) => {
      if (value.id === row.id) {
        value.firstName = row.firstName;
        value.lastName = row.lastName;
        value.gender = row.gender;
        value.email = row.email;
        value.address = row.address;

      }
      return true;
    });
  }

  deleteRowData(row) {
    this.dataSource = this.dataSource.filter((value, key) => {

      return value.id !== row.id;

    });
  }


  ngOnInit(): void {


    console.log(persons);


  }


}
