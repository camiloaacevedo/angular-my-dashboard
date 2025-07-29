import { Component } from '@angular/core';
import { HeavyLoadersFastComponent } from '@shared/heavy-loaders/heavy-loaders-fast.component';
import { TitleComponent } from '@shared/title/title.component';
import { HeavyLoadersSlowComponent } from "@shared/heavy-loaders/heavy-loaders-slow.component";

@Component({
  selector: 'app-defer-options',
  imports: [HeavyLoadersFastComponent, TitleComponent],
  templateUrl: './defer-options.component.html',
})
export default class DeferOptionsComponent { }
