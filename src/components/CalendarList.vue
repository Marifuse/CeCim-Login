<template>
  <div class="calendar__container">
		<v-col cols="12" sm="10" md="12">
			<h1 class="text-center mt-5" style="color: #FFF;">Calendario de Horas Médicas</h1>
			<!-- Calendario -->
			<v-row justify="center" class="mx-auto">
				<v-date-picker v-model="date" v-bind:max="today" 
				color="blue darken-3" full-width :landscape="$vuetify.breakpoint.smAndUp" 
				class="mt-10 mb-5" @click:date="getInfo"></v-date-picker>
			</v-row>
			<v-row>
				<v-col>
					<v-sheet height="400">
						<v-calendar
							ref="calendar"
							:now="today"
							:value="today"
							:events="events"
							color="primary"
							type="week"
						></v-calendar>
					</v-sheet>
				</v-col>
			</v-row>
		</v-col>
  </div>
</template>

<script>
export default {
	data: () => ({
		today: '2020-10-14',
		events: [
			{
				name: 'Javier Sepulveda / Hora Medicina General',
				start: '2020-10-15 08:00',
				end: '2020-10-15 09:00',
			},
			{
				name: 'Tomas Santander / Hora Rayos X',
				start: '2020-10-14 09:00',
				end: '2020-10-14 09:30',
			},
			{
				name: 'Alejandra Pizarro / Hora Dental',
				start: '2020-10-15 14:00',
				end: '2020-10-15 15:00',
			},
		],
	}),
	mounted () {
		this.$refs.calendar.scrollToTime('08:00')
	},
}
</script>

<style scoped>
.calendar__container {
	background-color: rgb(145, 145, 252);
}
</style>