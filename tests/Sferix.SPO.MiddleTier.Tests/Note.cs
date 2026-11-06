using Sferix.SPO.Abstractions.Entities;
using Sferix.SPO.Abstractions.Metadata;
using Sferix.SPO.Abstractions.Modules;

namespace Sferix.SPO.MiddleTier.Tests;

/// <summary>A minimal entity proving the FrankenSPO packages and their source generator work in this repository.</summary>
[SpoEntity("6f1d0c52-2a7e-4b39-9e84-1c5a7d3b9f20")]
public partial class Note : SPOBaseObject
{
    [SpoField(1)] public string Text { get; set; } = "";
}

/// <summary>The test module.</summary>
public sealed class NoteModule : ISpoModule
{
    /// <inheritdoc />
    public IEnumerable<EntityMetadata> Entities => [Note.SpoMetadata];
}
