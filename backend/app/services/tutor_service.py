from sqlalchemy import text

from app.database import engine


def find_tutor_available_times(tutor_id: int):
    with engine.connect() as conn:
        tutor_sql = text("""
            SELECT
                tutor_id,
                tutor_name
            FROM tutors
            WHERE tutor_id = :tutor_id
              AND is_active = 1
        """)

        tutor_result = conn.execute(tutor_sql, {"tutor_id": tutor_id})
        tutor = tutor_result.mappings().first()

        if tutor is None:
            return None

        available_time_sql = text("""
            SELECT
                available_time_id,
                day_of_week,
                CAST(start_time AS CHAR) AS start_time,
                CAST(end_time AS CHAR) AS end_time
            FROM tutor_available_times
            WHERE tutor_id = :tutor_id
              AND is_active = 1
            ORDER BY
                FIELD(day_of_week, 'MON', 'TUE', 'WED', 'THU', 'FRI'),
                start_time
        """)

        available_time_result = conn.execute(
            available_time_sql,
            {"tutor_id": tutor_id}
        )

        available_times = [
            dict(row) for row in available_time_result.mappings().all()
        ]

        return {
            "tutor_id": tutor["tutor_id"],
            "tutor_name": tutor["tutor_name"],
            "available_times": available_times,
        }