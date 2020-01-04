<template>
  <div class="simpleslider" data-content>
    <div class="wrap">
      <div class="container">
  <div class="activity-calendar">
			<div class="activity-calendar__top flex--center-center">
				<button class="activity-calendar__top-icon" data-activity-calendar-icon="prev">
				</button>
				<div>
					<span class="activity-calendar__top-headline">Headline</span>
					<div data-activity-year-wrap>
						<span class="activity-calendar__top-sub-headline" data-activity-calendar-year="prev">2018-2019</span><!-- Hardcoded årstal -->
						<span class="activity-calendar__top-sub-headline is-active" data-activity-calendar-year="current">2019-2020</span><!-- Hardcoded årstal -->
					</div>
				</div>
				<button class="activity-calendar__top-icon activity-calendar__top-icon--revert" data-activity-calendar-icon="current">
				</button>
			</div>
			<div data-activity-content-wrap>
				<!-- Foreach calendar year -->
				<div class="activity-calendar__wrap activity-calendar__wrap--prev" data-activity-calendar-item>
			
						<div class="activity-calendar__item" data-activity-month-content="@wheelDataItem.GetMonthName">
							<div class="activity-calendar__item-headline flex--center-center">
								<div>
									<span>wheelDataItem.GetMonthName</span>
									<span>2017</span> <!-- Hardcoded årstal -->
								</div>
							</div>
									<a href="@eventItem.Url" class="activity-calendar__item-activity flex--vertical-center">
										<div>
											<span>Header</span>
											<span>GetDisplayDate</span>
										</div>
									</a>
								<div class="activity-calendar__item-no-activity flex--vertical-center">
									<span>@Dictionary.ActivityPageNoEvents</span>
								</div>
						</div>
<div class="activity-calendar__item" data-activity-month-content="@wheelDataItem.GetMonthName">
							<div class="activity-calendar__item-headline flex--center-center">
								<div>
									<span>wheelDataItem.GetMonthName</span>
									<span>2017</span> <!-- Hardcoded årstal -->
								</div>
							</div>
									<a href="@eventItem.Url" class="activity-calendar__item-activity flex--vertical-center">
										<div>
											<span>Header</span>
											<span>GetDisplayDate</span>
										</div>
									</a>
								<div class="activity-calendar__item-no-activity flex--vertical-center">
									<span>@Dictionary.ActivityPageNoEvents</span>
								</div>
						</div>
            <div class="activity-calendar__item" data-activity-month-content="@wheelDataItem.GetMonthName">
							<div class="activity-calendar__item-headline flex--center-center">
								<div>
									<span>wheelDataItem.GetMonthName</span>
									<span>2017</span> <!-- Hardcoded årstal -->
								</div>
							</div>
									<a href="@eventItem.Url" class="activity-calendar__item-activity flex--vertical-center">
										<div>
											<span>Header</span>
											<span>GetDisplayDate</span>
										</div>
									</a>
								<div class="activity-calendar__item-no-activity flex--vertical-center">
									<span>@Dictionary.ActivityPageNoEvents</span>
								</div>
						</div>
				</div>
			<div class="activity-calendar__wrap" data-activity-calendar-item>
			
						<div class="activity-calendar__item" data-activity-month-content="@wheelDataItem.GetMonthName">
							<div class="activity-calendar__item-headline flex--center-center">
								<div>
									<span>wheelDataItem.GetMonthName</span>
									<span>2020</span> <!-- Hardcoded årstal -->
								</div>
							</div>
									<a href="@eventItem.Url" class="activity-calendar__item-activity flex--vertical-center">
										<div>
											<span>Header</span>
											<span>GetDisplayDate</span>
										</div>
									</a>
								<div class="activity-calendar__item-no-activity flex--vertical-center">
									<span>@Dictionary.ActivityPageNoEvents</span>
								</div>
						</div>
            
						<div class="activity-calendar__item" data-activity-month-content="@wheelDataItem.GetMonthName">
							<div class="activity-calendar__item-headline flex--center-center">
								<div>
									<span>wheelDataItem.GetMonthName</span>
									<span>2020</span> <!-- Hardcoded årstal -->
								</div>
							</div>
									<a href="@eventItem.Url" class="activity-calendar__item-activity flex--vertical-center">
										<div>
											<span>Header</span>
											<span>GetDisplayDate</span>
										</div>
									</a>
								<div class="activity-calendar__item-no-activity flex--vertical-center">
									<span>@Dictionary.ActivityPageNoEvents</span>
								</div>
						</div>
            
						<div class="activity-calendar__item" data-activity-month-content="@wheelDataItem.GetMonthName">
							<div class="activity-calendar__item-headline flex--center-center">
								<div>
									<span>wheelDataItem.GetMonthName</span>
									<span>2020</span> <!-- Hardcoded årstal -->
								</div>
							</div>
									<a href="@eventItem.Url" class="activity-calendar__item-activity flex--vertical-center">
										<div>
											<span>Header</span>
											<span>GetDisplayDate</span>
										</div>
									</a>
								<div class="activity-calendar__item-no-activity flex--vertical-center">
									<span>@Dictionary.ActivityPageNoEvents</span>
								</div>
						</div>
<div class="activity-calendar__item" data-activity-month-content="@wheelDataItem.GetMonthName">
							<div class="activity-calendar__item-headline flex--center-center">
								<div>
									<span>wheelDataItem.GetMonthName</span>
									<span>2020</span> <!-- Hardcoded årstal -->
								</div>
							</div>
									<a href="@eventItem.Url" class="activity-calendar__item-activity flex--vertical-center">
										<div>
											<span>Header</span>
											<span>GetDisplayDate</span>
										</div>
									</a>
								<div class="activity-calendar__item-no-activity flex--vertical-center">
									<span>@Dictionary.ActivityPageNoEvents</span>
								</div>
						</div>
            <div class="activity-calendar__item" data-activity-month-content="@wheelDataItem.GetMonthName">
							<div class="activity-calendar__item-headline flex--center-center">
								<div>
									<span>wheelDataItem.GetMonthName</span>
									<span>2020</span> <!-- Hardcoded årstal -->
								</div>
							</div>
									<a href="@eventItem.Url" class="activity-calendar__item-activity flex--vertical-center">
										<div>
											<span>Header</span>
											<span>GetDisplayDate</span>
										</div>
									</a>
								<div class="activity-calendar__item-no-activity flex--vertical-center">
									<span>@Dictionary.ActivityPageNoEvents</span>
								</div>
						</div>
				</div>
			</div>
      </div>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import "@/assets/styles/components/_simple-slider.scss";
import Tabs from "@/assets/scripts/custom/SimpleSlider";

@Component
export default class SimpleSlider extends Vue {
    private msg: string = "Simple slider";

  mounted() {
    const init = new Tabs();
    return init;
  }
}
</script>
