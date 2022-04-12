<template>
    <Container :styles="'container--body'">
        <section class="info">
            <div class="block-about">
                <div class="block-about__title">Общая информация</div>
                <div class="block-about__subtitle">Бюро стандартизации и метрологии (БСиМ) является структурным подразделением учреждения образования «Гомельский государственный университет имени Франциска Скорины», подчиняется проректору университета по научной работе и осуществляет свою деятельность под методическим руководством головной организации по стандартизации и метрологическому обеспечению Министерства образования Республики Беларусь и территориальных органов Государственного комитета по стандартизации Республики Беларусь (Госстандарта). БСиМ осуществляет комплекс работ по обеспечению функционирования системы менеджмента качества (СМК) университета, по стандартизации и метрологическому обеспечению научных исследований, образовательного процесса и хозяйственной деятельности университета.</div>
            </div>
            <div class="block-about">
                <div class="block-about__title">Контактная  информация</div>
                <ul class="block-about__contact-info">
                    <li class="block-about__contact">Телефон: (0232) 50-38-23 </li>
                    <li class="block-about__contact">Факс: (0232) 56-30-02 </li>
                    <li class="block-about__contact">E-mail: <a href="mailto:aleshkevich@gsu.by">aleshkevich@gsu.by</a></li>
                    <li class="block-about__contact">Адрес: 246019, г. Гомель, ул. Советская, 102 (учебный корпус № 5, каб. 3-6, 3-9)</li>
                </ul>
            </div>
            <div class="block-about">
                <div class="block-about__title">Услуги</div>
                <ol :style="{'list-style-type':'disc', 'padding-left':'24px'}" class="block-about__contact-info">
                    <li class="block-about__contact">предоставление необходимых документов, имеющихся в наличии, для ознакомления при посещении бюро; </li>
                    <li class="block-about__contact">регистрация и актуализация копий ТНПА; </li>
                    <li class="block-about__contact">предоставление оперативной библиографической информации о документах (о введении ТНПА, сроках действия, внесенных изменениях, пересмотре, замене и отмене и т. д.); </li>
                    <li class="block-about__contact">оказание помощи в поиске и подборе нормативно-технической документации по требуемой тематике; </li>
                    <li class="block-about__contact">абонементное обслуживание; </li>
                    <li class="block-about__contact">прием заявок на заказ и приобретение ТНПА; </li>
                    <li class="block-about__contact">практическая помощь студентам и преподавателям в оформлении курсовых и дипломных работ, отчетов по НИР.</li>
                </ol>
            </div>
        </section>
    </Container>
</template>

<script>
import Container from '../components/Container.vue'
export default {
    components:{
        Container
    }
}
</script>

<style lang="scss" scoped>
    .info{
        & > *:not(:last-child){
            margin-bottom: 40px;
        }
    }
</style>