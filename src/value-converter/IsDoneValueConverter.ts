export class IsDoneValueConverter {
    toView(value) {
        if (value) {
            return "✓";
        }
        else
            return "⨉";
    }
}
