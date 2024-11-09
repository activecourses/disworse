import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { FieldApi } from "@tanstack/react-form";
import { useEffect, useState } from "react";

interface MyFormData {
    selectedDay: number;
    selectedMonth: number;
    selectedYear: number;
}

interface FieldInfoProps {
    field: FieldApi<
        MyFormData,
        "selectedMonth" | "selectedYear" | "selectedDay"
    >; // Adjusted to accept string or number based on your use case
}

function FieldInfo({ field }: FieldInfoProps) {
    return (
        <>
            {field.state.meta.isTouched && field.state.meta.errors.length ? (
                <em
                    className="text-red-500 text-sm"
                    role="alert"
                    aria-live="assertive"
                >
                    {field.state.meta.errors.join(",")}
                </em>
            ) : null}
            {field.state.meta.isValidating ? "Validating..." : null}
        </>
    );
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function DateDropdowns({ form }: { form: any }) {
    const [selectedYear, setSelectedYear] = useState<number | null>(null);
    const [selectedMonth, setSelectedMonth] = useState<number | null>(null);
    const [selectedDay, setSelectedDay] = useState<number | null>(null);

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 101 }, (_, i) => currentYear - i); // Last 100 years
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const [daysInMonth, setDaysInMonth] = useState<number[]>([]);

    useEffect(() => {
        const isLeapYear = (year: number): boolean => {
            return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
        };

        const daysInSelectedMonth = (month: number): number => {
            if (month === 1) {
                return isLeapYear(selectedYear ?? 0) ? 29 : 28; // February
            }
            return [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
        };

        if (selectedYear !== null && selectedMonth !== null) {
            setDaysInMonth(
                Array.from(
                    { length: daysInSelectedMonth(selectedMonth) },
                    (_, i) => i + 1,
                ),
            );
        }
    }, [selectedYear, selectedMonth]);

    return (
        <>
            <Label htmlFor="date">DATE OF BIRTH</Label>
            <div className="flex gap-2">
                <form.Field
                    name="selectedYear"
                    children={(
                        field: FieldApi<
                            MyFormData,
                            keyof MyFormData,
                            undefined,
                            undefined,
                            number
                        >,
                    ) => {
                        return (
                            <div className="grid flex-grow gap-2">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className="flex-grow"
                                            id="date"
                                        >
                                            {selectedYear ?? "Year"}
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        style={{
                                            maxHeight: "200px",
                                            overflowY: "auto",
                                        }}
                                    >
                                        <DropdownMenuLabel>
                                            Select Year
                                        </DropdownMenuLabel>
                                        {years.map((year) => (
                                            <DropdownMenuItem
                                                key={year}
                                                onSelect={() => {
                                                    setSelectedYear(year);
                                                    field.handleChange(year);
                                                }}
                                            >
                                                {year}
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <FieldInfo field={field} />
                            </div>
                        );
                    }}
                />
                <form.Field
                    name="selectedMonth"
                    children={(
                        field: FieldApi<
                            MyFormData,
                            keyof MyFormData,
                            undefined,
                            undefined,
                            number
                        >,
                    ) => {
                        return (
                            <div className="grid flex-grow gap-2">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className="flex-grow"
                                        >
                                            {selectedMonth !== null
                                                ? months[selectedMonth]
                                                : "Month"}
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        style={{
                                            maxHeight: "200px",
                                            overflowY: "auto",
                                        }}
                                    >
                                        <DropdownMenuLabel>
                                            Select Month
                                        </DropdownMenuLabel>
                                        {months.map((month, index) => (
                                            <DropdownMenuItem
                                                key={month}
                                                onSelect={() => {
                                                    setSelectedMonth(index);
                                                    field.handleChange(index);
                                                }}
                                            >
                                                {month}
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <FieldInfo field={field} />
                            </div>
                        );
                    }}
                />
                <form.Field
                    name="selectedDay"
                    children={(
                        field: FieldApi<
                            MyFormData,
                            keyof MyFormData,
                            undefined,
                            undefined,
                            number
                        >,
                    ) => {
                        return (
                            <div className="grid flex-grow gap-2">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className="flex-grow"
                                        >
                                            {selectedDay ?? "Day"}
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        style={{
                                            maxHeight: "200px",
                                            overflowY: "auto",
                                        }}
                                    >
                                        <DropdownMenuLabel>
                                            <p>
                                                {selectedMonth !== null
                                                    ? ""
                                                    : "You Have To Select Month Before Proceeding"}
                                            </p>
                                            <p>
                                                {selectedYear
                                                    ? ""
                                                    : "You Have To Select Year Before Proceeding"}
                                            </p>
                                            <p>
                                                {selectedMonth !== null &&
                                                    selectedYear &&
                                                    "Select Day"}
                                            </p>
                                        </DropdownMenuLabel>
                                        {selectedMonth !== null &&
                                            selectedYear &&
                                            daysInMonth.map((day) => (
                                                <DropdownMenuItem
                                                    key={day}
                                                    onSelect={() => {
                                                        setSelectedDay(day);
                                                        field.handleChange(day);
                                                    }}
                                                >
                                                    {day}
                                                </DropdownMenuItem>
                                            ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <FieldInfo field={field} />
                            </div>
                        );
                    }}
                />
            </div>
        </>
    );
}

export default DateDropdowns;
