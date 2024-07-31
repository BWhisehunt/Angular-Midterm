import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService, Job } from '../job-service.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  job: Job | undefined;

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('jobId');
    const id = idParam !== null ? parseInt(idParam, 10) : NaN;

    if (!isNaN(id)) {
      this.jobService.getJob(id).subscribe(job => this.job = job);
    } else {
    
    }
  }
}