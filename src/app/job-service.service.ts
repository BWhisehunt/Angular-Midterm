import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Job {
  id: number;
  title: string;
  description: string;
  duration: string;
  employer: string;
}

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private jobs: Job[] = [
    { id: 1, title: 'Manager', description: 'Managing from 6 to 75 employees within Housekeeping and the Uniform Room', duration: '12 Years', employer: 'The Broadmoor Hotel' },
    { id: 2, title: 'Owner/Operator', description: 'Ran the business of detailing cars', duration: '3 Years', employer: 'Dayspring Auto Detailing, within Dayspring Enterprises' },
    { id: 3, title: 'CEO', description: 'Ran the business of vending machines', duration: '5 Years', employer: 'Dayspring Enterprises' },

  ];

  getJobs(): Observable<Job[]> {
    return of(this.jobs);
  }

  getJob(id: number): Observable<Job> {
    const job = this.jobs.find(j => j.id === id);
    return of(job!);
  }
}